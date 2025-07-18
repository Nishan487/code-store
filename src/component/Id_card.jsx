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
import React, { useState,useEffect } from "react";
import "./Id_card.css";
import axios from "axios";



function Id_card() {
  const [name, setName] = useState("John Doe");
  const [studentId, setStudentId] = useState("CS101-2025");
  const [course, setCourse] = useState("Computer Science");
  const [photo, setPhoto] = useState(null);
    const [backphoto, setBackphoto] = useState(null);
  const [added, setAdded] = useState(false);
  const [parentName,setparentName]=useState("jonny sins");
  const [grade ,setGrade]=useState('10');
  const [rollNo,setRollNo]=useState('10');
  const [contactinfo, setContactinfo]=useState('9863447373');
  const [collageName,setCollageName]=useState('CodeStore University');
  const [backgroundColor,setBackgroundColor]=useState('#6953da');

const handleClick = async () => {
  const cardData = {
    itemName: "ID Card",
    itemType: "idcard",
    itemDetails:{
      name,
      studentId,
      course,
      photo,
      parentName,
      contactinfo,
      collageName,
      backgroundColor
    }
  };

  try {
    await axios.post('http://localhost:5000/api/cart', cardData);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  } catch (error) {
    console.error('Error adding to cart:', error);
    alert("Failed to add item to cart.");
  }
};

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };
  //  const handleBackPhotoUpload = (e) => {
  //   const file = e.target.files[1];
  //   if (file) {
  //     setBackphoto(URL.createObjectURL(file));
  //   }
  // };

  useEffect(() => {
  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/cart");

      // Parse itemDetails JSON string into JS object for each item
      const parsedItems = res.data.map(item => ({
        ...item,
        itemDetails: JSON.parse(item.itemDetails),
      }));

      setCartItems(parsedItems);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };

  fetchCart();
}, []);

  return (
    <>
    <div className="main-wrapper">
      <h2 className="title">Design Your ID Card</h2>
      <div className="card-container">
        <div className="id-card" style={{
          backgroundColor:backgroundColor,
         
          }}>
          
          <p className="university">{collageName}</p>

          <div className="photo">
            {photo ? (
              <img src={photo} alt="Uploaded" />
            ) : (
              <div className="photo-placeholder">Photo</div>
            )}

             {/* {backphoto ? (
              <img src={backphoto} alt="Uploaded" />
            ) : (
              <div className="photo-placeholder">Back photo</div>
            )} */}
          </div>

          <p><strong>Name:</strong> {name}</p>
          <p><strong>Parent Name:</strong> {parentName}</p>
          <p><strong>Student ID:</strong> {studentId}</p>
          <p><strong>ContactInfo:</strong> {contactinfo}</p>

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
    <label className="color-picker-label">
      Choose Color:
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="color-picker-input"
          />
        </label>
         
      <input
            type="text"
            value={collageName}
            onChange={(e) => setCollageName(e.target.value)}
            placeholder="Enter collage Name"
          />
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
           <input
            type="text"
            value={parentName}
            onChange={(e) => setparentName(e.target.value)}
            placeholder="Enter parent Name"
          />
           <input
            type="text"
            value={contactinfo}
            onChange={(e) => setContactinfo(e.target.value)}
            placeholder="Enter contactinfo"
          />
          <label className="upload-btn">
            Upload Photo (Placeholder)
            <input type="file" accept="image/*" onChange={handlePhotoUpload} hidden />
          </label>
                     {/* <label className="upload-btn">
            Upload Back Photo (Placeholder)
            <input type="file" accept="image/*" onChange={handleBackPhotoUpload} hidden />
          </label> */}
        </div>
         <div className="discussion">
          <p>An ID Card (Identification Card) is a small card that contains personal and official information about a person. It helps to identify, verify, and authorize the person in various settings like schools, colleges, offices, or organizations.</p>

        </div>
       
    </>
  );
}

export default Id_card;

  // Function to handle ID card name input

