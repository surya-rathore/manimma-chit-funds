import "../assets/Member.css";

function Member({ formData, setFormData }) {

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };


  const handlePhotoChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      const imageUrl = URL.createObjectURL(file);

      setFormData((prev) => ({
        ...prev,
        photo: imageUrl,
      }));

    }

  };


  return (
    <div className="member-box">

      <div className="section-title">
        <span>1</span>
        MEMBER DETAILS
      </div>


      <div className="left-side">

        <div className="form-row">
          <label>Full Name</label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>


        <div className="form-row">
          <label>Date of Birth</label>

          <input
            type="text"
            name="dob"
            placeholder="DD/MM/YYYY"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>


        <div className="form-row">
          <label>Mobile Number</label>

          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>


        <div className="form-row">
          <label>Aadhaar Number</label>

          <input
            type="text"
            name="aadhaar"
            value={formData.aadhaar}
            onChange={handleChange}
          />
        </div>


        <div className="form-row">
          <label>Occupation</label>

          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
          />
        </div>


        <div className="form-row address">
          <label>Address</label>

          <textarea
            rows="2"
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>

      </div>


      <div className="right-side">

        <div className="form-row">
          <label>Father / Spouse Name</label>

          <input
            type="text"
            name="fatherSpouseName"
            value={formData.fatherSpouseName}
            onChange={handleChange}
          />
        </div>


        <div className="form-row">

          <label>Gender</label>

          <div className="gender">

            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />

            <label htmlFor="male">
              Male
            </label>


            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />

            <label htmlFor="female">
              Female
            </label>


            <input
              type="radio"
              id="other"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            />

            <label htmlFor="other">
              Other
            </label>

          </div>

        </div>


        <div className="form-row">
          <label>Email ID</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>


        <div className="form-row">
          <label>PAN Number</label>

          <input
            type="text"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
          />
        </div>

      </div>


      {/* MEMBER PHOTO */}

      <div className="photo-box">

        {formData.photo ? (

          <img
            src={formData.photo}
            alt="Preview"
            className="preview-image"
          />

        ) : (

          <p>No Image</p>

        )}


        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
        />

      </div>

    </div>
  );
}

export default Member;