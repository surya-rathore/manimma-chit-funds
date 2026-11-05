import "../assets/Documents.css";

function Document({ documentData, setDocumentData }) {

  const handleFileChange = (event, type) => {

    const selectedFile = event.target.files[0];

    if (selectedFile) {

      setDocumentData((prev) => ({
        ...prev,
        [type]: selectedFile,
      }));

    }

  };


  return (
    <div className="member-box">

      <div className="section-title">

        <span>4</span>

        REQUIRED DOCUMENTS

      </div>


      {/* ======================
          AADHAAR
      ====================== */}

      <div className="documents-container">

        <label className="document-card">

          <div className="document-icon">

            <img
              src="/aadhar.png"
              alt="Aadhaar Card"
            />

          </div>


          <div className="document-content">

            <h3>
              Aadhaar Card
            </h3>


            {documentData.aadharFile && (

              <p className="selected-file">

                ✓ {documentData.aadharFile.name}

              </p>

            )}

          </div>


          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(e) =>
              handleFileChange(
                e,
                "aadharFile"
              )
            }
            hidden
          />

        </label>

      </div>



      {/* ======================
          PAN
      ====================== */}

      <div className="documents-container">

        <label className="document-card">

          <div className="document-icon">

            🪪

          </div>


          <div className="document-content">

            <h3>
              PAN Card
            </h3>


            {documentData.panFile && (

              <p className="selected-file">

                ✓ {documentData.panFile.name}

              </p>

            )}

          </div>


          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(e) =>
              handleFileChange(
                e,
                "panFile"
              )
            }
            hidden
          />

        </label>

      </div>

    </div>
  );
}

export default Document;