
import { useState } from "react";
import "../assets/Declaration.css";

function Declaration() {
  const [signature, setSignature] = useState(null);

  const handleSignature = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSignature(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="member-box">
        <div className="section-title">
          <span>6</span>
          DECLARATION
        </div>

        <div className="declaration-box">
          <div className="content-box">
            I hereby declare that the above information provided by me is
            true and correct. I have read and understood all the terms and
            conditions of the chit fund scheme and agree to abide by them.
          </div>

          <div className="signature">
            <input
              type="file"
              accept="image/*"
              onChange={handleSignature}
            />

            {signature && (
              <img
                src={signature}
                alt="Applicant Signature"
                className="signature-preview"
              />
            )}

            <span>Applicant Signature</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Declaration;
