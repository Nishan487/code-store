// import React, { useState } from "react";
// import './Id_card.css'
// function Id_card() {
//   const [name, setName] = useState("John Doe");
//   const [studentId, setStudentId] = useState("CS101-2025");
//   const [course, setCourse] = useState("Computer Science");
//   const [photo, setPhoto] = useState(null);

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPhoto(URL.createObjectURL(file));
//     }
//   };

//   const styles = {
//     container: {
//       fontFamily: "sans-serif",
//       textAlign: "center",
//       background: "linear-gradient(to right, #f0f0f0, #fce4ec)",
     
//       padding: "40px",
      
//     },
//     card: {
//       backgroundColor: "#7b61ff",
//       color: "white",
//       borderRadius: "16px",
//       padding: "20px",
//       margin: "20px auto",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//       width: "100%",
//       maxWidth: "350px",
//     },
//     university: {
//       fontSize: "14px",
//       marginTop: "4px",
//       opacity: 0.9,
//     },
//     photo: {
//       margin: "16px auto",
//       width: "80px",
//       height: "80px",
//       borderRadius: "50%",
//       backgroundColor: "white",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       overflow: "hidden",
//       border: "3px solid white",
//     },
//     photoText: {
//       color: "gray",
//       fontWeight: "bold",
//     },
//     photoImg: {
//       width: "100%",
//       height: "100%",
//       objectFit: "cover",
//     },
//     validity: {
//       fontSize: "12px",
//       marginTop: "10px",
//       opacity: 0.9,
//     },
//     input: {
//       display: "block",
//       margin: "10px auto",
//       padding: "10px",
//       width: "100%",
//       maxWidth: "350px",
//       borderRadius: "8px",
//       border: "1px solid #ccc",
//       fontSize: "16px",
//     },
//     uploadBtn: {
//       display: "inline-block",
//       marginTop: "10px",
//       background: "#333",
//       color: "white",
//       padding: "10px 20px",
//       borderRadius: "8px",
//       cursor: "pointer",
//       fontSize: "14px",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Design Your ID Card</h2>
//       <div style={styles.card}>
//         <h3>STUDENT ID CARD</h3>
//         <p style={styles.university}>CodeStore University</p>
//         <div style={styles.photo}>
//           {photo ? (
//             <img src={photo} alt="Uploaded" style={styles.photoImg} />
//           ) : (
//             <div style={styles.photoText}>Photo</div>
//           )}
//         </div>
//         <p>
//           <strong>Name:</strong> {name}
//         </p>
//         <p>
//           <strong>Student ID:</strong> {studentId}
//         </p>
//         <p>
//           <strong>Course:</strong> {course}
//         </p>
//         <p style={styles.validity}>Valid until: 12/2026</p>
//       </div>

//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         style={styles.input}
//       />
//       <input
//         type="text"
//         value={studentId}
//         onChange={(e) => setStudentId(e.target.value)}
//         style={styles.input}
//       />
//       <input
//         type="text"
//         value={course}
//         onChange={(e) => setCourse(e.target.value)}
//         style={styles.input}
//       />

//       <label style={styles.uploadBtn}>
//         Upload Photo (Placeholder)
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handlePhotoUpload}
//           hidden
//         />
//       </label>
//     </div>
//   );
// }

// export default Id_card;
import React, { useState } from "react";
import "./Id_card.css";




function Id_card() {
  const [name, setName] = useState("John Doe");
  const [studentId, setStudentId] = useState("CS101-2025");
  const [course, setCourse] = useState("Computer Science");
  const [photo, setPhoto] = useState(null);
  const [added, setAdded] = useState(false);

const handleClick = () => {
  const cardData = {
    id: Date.now(),
    type: "idcard",
    name,
    studentId,
    course,
    photo,
  };

  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  existingCart.push(cardData);

  localStorage.setItem("cart", JSON.stringify(existingCart));

  setAdded(true);
  setTimeout(() => setAdded(false), 1500);
};


  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <>
    <div className="main-wrapper">
      <h2 className="title">Design Your ID Card</h2>
      <div className="card-container">
        <div className="id-card">
          <h3>STUDENT ID CARD</h3>
          <p className="university">CodeStore University</p>

          <div className="photo">
            {photo ? (
              <img src={photo} alt="Uploaded" />
            ) : (
              <div className="photo-placeholder">Photo</div>
            )}
          </div>

          <p><strong>Name:</strong> {name}</p>
          <p><strong>Student ID:</strong> {studentId}</p>
          <p><strong>Course:</strong> {course}</p>
          <p className="validity" style={{color:'black'}}>Valid until: 12/2026</p>
        </div>

        
      </div>
      <div className="add">
       <button className={`cart-button ${added ? "added" : ""}`} onClick={handleClick}>
      {added ? "Added to Cart ✓" : "Add to Cart"}
    </button>
    </div>
    </div>
    <div className="form-area">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Enter Student ID"
          />
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Enter Course"
          />
          <label className="upload-btn">
            Upload Photo (Placeholder)
            <input type="file" accept="image/*" onChange={handlePhotoUpload} hidden />
          </label>
        </div>
         <div className="discussion">
          <p>An ID Card (Identification Card) is a small card that contains personal and official information about a person. It helps to identify, verify, and authorize the person in various settings like schools, colleges, offices, or organizations.</p>

        </div>
       
    </>
  );
}

export default Id_card;

  // Function to handle ID card name input
