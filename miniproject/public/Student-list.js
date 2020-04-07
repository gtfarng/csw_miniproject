// import React from 'react' ;
// import Student from './Student'
// import { connect } from 'react-redux'; 
// import * as action from './redux/action' ;

// const StudentLists = () => {
//     const allStudents = this.props.studentFromStore ; 
//     let lists = (
//         <div className="col-12 mx-auto">
//             <div className="alert-info text-center pt-5 pb-5">ไม่พบข้อมูลนักเรียน</div>
//         </div>
//     );
//     if(allStudents.length !== 0){
//         lists = allStudents.map( item => (
//             <div className="col-12 col-sm-6 col-lg-4 mt-3" key={item.id}>
//                 <Student data={item} />
//             </div>
//             )
//         );
//     }
//     return(
//         <div className="row">
//             {lists}
//         </div>
        
//     )
//     componentDidMount () {
//         this.porps.get
//     }

// }

// export default connect(mapStateToProps, mapDispatchToProps)(StudentLists) ;