import "../assets/Nominee.css";

function Nominee({ nomineeData, setNomineeData }) {

  const handleChange = (e) => {

    const { name, value } = e.target;

    setNomineeData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };


  const handleSignatureChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      const imageUrl = URL.createObjectURL(file);

      setNomineeData((prev) => ({
        ...prev,
        signature: imageUrl,
      }));

    }

  };


  return (
    <div className="member-box">

      <div className="section-title">
        <span>2</span>
        NOMINEE DETAILS
      </div>


      <div className="nominee-dtails">

        <div className="form-row">
          <label>Nominee Name :</label>

          <input
            type="text"
            name="nomineeName"
            value={nomineeData.nomineeName}
            onChange={handleChange}
          />
        </div>


        <div className="form-row">
          <label>Father’s Name :</label>

          <input
            type="text"
            name="fatherName"
            value={nomineeData.fatherName}
            onChange={handleChange}
          />
        </div>


        <div className="form-row">
          <label>Relationship :</label>

          <input
            type="text"
            name="relationship"
            value={nomineeData.relationship}
            onChange={handleChange}
          />
        </div>


        <div className="form-row">
          <label>Aadhar Number :</label>

          <input
            type="text"
            name="aadharNumber"
            value={nomineeData.aadharNumber}
            onChange={handleChange}
          />
        </div>


        <div className="form-row">
          <label>Mobile Number :</label>

          <input
            type="text"
            name="mobileNumber"
            value={nomineeData.mobileNumber}
            onChange={handleChange}
          />
        </div>


        <div className="form-row">

          <label>Signature :</label>

          <input
            type="file"
            accept="image/*"
            onChange={handleSignatureChange}
          />

        </div>


        {nomineeData.signature && (

          <div className="signature-preview">

            <img
              src={nomineeData.signature}
              alt="Signature Preview"
            />

          </div>

        )}


        <div className="form-row">

          <label>Address :</label>

          <input
            type="text"
            name="address"
            value={nomineeData.address}
            onChange={handleChange}
          />

        </div>

      </div>

    </div>
  );
}

export default Nominee;