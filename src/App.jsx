
import { useState } from "react";

import Header from "./components/Header";
import Term from "./components/Terms";
import Nominee from "./components/Nominee";
import Office from "./components/For-Office";
import Declaration from "./components/Declaration";
import Document from "./components/Required-Document";
import Chit from "./components/Chit-scheme";
import Footer from "./components/Footer";
import Member from "./components/Member";

import "./App.css";

const App = () => {

  // MEMBER DATA
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    mobile: "",
    aadhaar: "",
    occupation: "",
    address: "",
    fatherSpouseName: "",
    gender: "",
    email: "",
    pan: "",
    photo: null,
  });

  // NOMINEE DATA
  const [nomineeData, setNomineeData] = useState({
    nomineeName: "",
    fatherName: "",
    relationship: "",
    aadharNumber: "",
    mobileNumber: "",
    signature: null,
    address: "",
  });

  // CHIT DATA
  const [chitData, setChitData] = useState({
  chitGroupName: "Manimma Chit funds",
  chitValue: "1,00,000",
  beforeLifting: "6650",
  afterLifting: "7650",
  totalMembers: "15",
  duration: "15 months",
  startDate: "01-09-2026",
  endDate: "30-11-2027",
});

  // DOCUMENT DATA
  const [documentData, setDocumentData] = useState({
    aadharFile: null,
    panFile: null,
  });

  // DECLARATION SIGNATURE
  const [declarationSignature, setDeclarationSignature] = useState(null);

  // VALIDATION MESSAGE
  const [validationError, setValidationError] = useState("");

  // PRINT VALIDATION
  const handlePrint = () => {

  const requiredFields = [
    // MEMBER DETAILS
    ["Full Name", formData.fullName],
    ["Date of Birth", formData.dob],
    ["Mobile Number", formData.mobile],
    ["Aadhaar Number", formData.aadhaar],
    ["Occupation", formData.occupation],
    ["Address", formData.address],
    ["Father / Spouse Name", formData.fatherSpouseName],
    ["Gender", formData.gender],
    ["Email ID", formData.email],
    ["PAN Number", formData.pan],
    ["Member Photo", formData.photo],

    // NOMINEE DETAILS
    ["Nominee Name", nomineeData.nomineeName],
    ["Father Name", nomineeData.fatherName],
    ["Relationship", nomineeData.relationship],
    ["Nominee Aadhaar", nomineeData.aadharNumber],
    ["Nominee Mobile", nomineeData.mobileNumber],
    ["Nominee Signature", nomineeData.signature],
    ["Nominee Address", nomineeData.address],


    // DOCUMENTS
    ["Aadhaar Document", documentData.aadharFile],
    ["PAN Document", documentData.panFile],
  ];

  const isFilled = (value) => {
    if (value === null || value === undefined) {
      return false;
    }

    if (typeof value === "string") {
      return value.trim() !== "";
    }

    return true;
  };

  const missingFields = requiredFields
    .filter(([name, value]) => !isFilled(value))
    .map(([name]) => name);

  if (missingFields.length > 0) {

    setValidationError(
      "Please fill these fields: " + missingFields.join(", ")
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    console.log("Missing Fields:", missingFields);

    return;
  }

  setValidationError("");

  document.body.classList.add("printing");

  setTimeout(() => {
    window.print();
  }, 100);

};

  return (
    <>
      <Header />

      {/* VALIDATION POPUP */}

      {validationError && (
        <div className="validation-error">
          <span>⚠️</span>
          {validationError}
        </div>
      )}

      {/* COMPLETE FORM */}

      <div className="container">

        {/* MEMBER */}

        <div className="member-print">
          <Member
            formData={formData}
            setFormData={setFormData}
          />
        </div>

        {/* NOMINEE AND CHIT */}

        <div className="nominee-chit">

          <div>
            <Nominee
              nomineeData={nomineeData}
              setNomineeData={setNomineeData}
            />
          </div>

          <div>
            <Chit
              chitData={chitData}
              setChitData={setChitData}
            />
          </div>

        </div>

        {/* REQUIRED DOCUMENTS */}

        <Document
          documentData={documentData}
          setDocumentData={setDocumentData}
        />

        {/* TERMS */}

        <Term />

        {/* DECLARATION */}

        <Declaration
          signature={declarationSignature}
          setSignature={setDeclarationSignature}
        />

        {/* OFFICE */}

        <Office />

      </div>

      <Footer />

      {/* ATTACHED DOCUMENTS */}

      <div className="attached-documents">

        <div className="attached-title">
          ATTACHED DOCUMENTS
        </div>

        {/* AADHAAR */}

        {documentData.aadharFile && (
          <div className="attached-document">

            <h3>Aadhaar Card</h3>

            {documentData.aadharFile.type.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(documentData.aadharFile)}
                alt="Aadhaar"
              />
            ) : (
              <iframe
                src={URL.createObjectURL(documentData.aadharFile)}
                title="Aadhaar PDF"
              />
            )}

          </div>
        )}

        {/* PAN */}

        {documentData.panFile && (
          <div className="attached-document">

            <h3>PAN Card</h3>

            {documentData.panFile.type.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(documentData.panFile)}
                alt="PAN"
              />
            ) : (
              <iframe
                src={URL.createObjectURL(documentData.panFile)}
                title="PAN PDF"
              />
            )}

          </div>
        )}

      </div>

      {/* PRINT BUTTON */}

      <div className="print-button-container">

        <button
          className="print-button"
          onClick={handlePrint}
        >
          🖨️ Print Form
        </button>

      </div>

    </>
  );
};

export default App;
