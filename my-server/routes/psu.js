require('tls').DEFAULT_MIN_VERSION = 'TLSv1'   // since TLSv1.3 default disable v1.0 
const soap = require('soap');
const url = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';

module.exports.login = (req,res) => {
    soap.createClient(url, (err, client) => {
        if (err) console.log(err)
        else {
            let user = {}
            user.username = res.body.username
            user.password = req.body.password

            client.GetStaffDetails(user, function (err, response) {
                // client.GetStudentDetails(args, function(err, response) {
                if (err) console.error(err);
                else {
                    const [stdId, firstname , lastname, id, type] = response.GetStaffDetailsResult.string;
                    require.session.psuInfo = JSON.stringify({ stdId, firstname, lastname, id, type})
                    res.json({ stdId, firstname, lastname, id , type});
                }
            });
        }
    })
}