import React, { useEffect, useState } from "react";
import {
  PDFDownloadLink,
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  BlobProvider,
} from "@react-pdf/renderer";
import numberToWords from "number-to-words";
import _ from "lodash";
import Breadcrums from "../../Components/Breadcrums/Breadcrums";

// Styles for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: "1px solid black",
  },
  title: {
    textAlign: "center", // Center text horizontally
    fontWeight: "bold", // Make text bold
    fontSize: 18, // Adjust font size as needed
    marginBottom: "10px",
  },
  date: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: "10px",
  },
  ownerName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: "10px",
    marginTop: "10px",
  },
  normal: {
    fontSize: 12,
    marginVertical: "6px",
  },
  line: {
    borderBottom: "1px solid black",
    marginVertical: "50px",
  },
  signature: {
    marginRight: "10px",
    fontSize: 12,
    textAlign: "right",
    marginVertical: "5px",
  },
});

// Function to split array into chunks
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
    arr.slice(index * size, index * size + size)
  );

// Component for rendering rent bills
const Bill = ({ data }) => (
  <Document>
    {chunk(data, 2).map((pageData, pageIndex) => (
      <Page size="A4" key={pageIndex} style={styles.page}>
        <View style={styles.section}>
          {pageData.map((billData, index) => (
            <>
              <Text style={styles.title}>House Rent Receipt</Text>
              <Text style={styles.date}>
                Dated: {new Date().toLocaleDateString()}
              </Text>
              <Text style={styles.normal}>
                This serves as confirmation of receiving a payment of Rs.
                {billData.rentAmount}/- (
                {_.capitalize(numberToWords.toWords(billData.rentAmount))} only)
                from {billData.tenantName}, representing rent for the property
                located at "{billData.tenantAddress}" for the month of{" "}
                {billData.endMonth}, {billData.year}
              </Text>
              <Text style={styles.ownerName}>Owner's Name and Address</Text>
              <Text style={styles.normal}>
                {billData.ownerName} - {billData.ownerAddress}
              </Text>
              <Text style={styles.signature}>Signature</Text>
              <Text style={styles.signature}>({billData.ownerName})</Text>
              <Text style={styles.line}></Text>
            </>
          ))}
        </View>
      </Page>
    ))}
  </Document>
);

const numToMonth = (current) => {
  if (current == "1") {
    return "January";
  } else if (current == "2") {
    return "Feburary";
  } else if (current == "3") {
    return "March";
  } else if (current == "4") {
    return "April";
  } else if (current == "5") {
    return "May";
  } else if (current == "6") {
    return "June";
  } else if (current == "7") {
    return "July";
  } else if (current == "8") {
    return "August";
  } else if (current == "9") {
    return "September";
  } else if (current == "10") {
    return "October";
  } else if (current == "11") {
    return "November";
  } else if (current == "12") {
    return "December";
  }
};

// Main Rent Bill Generator component
const RentBillGenerator = () => {
  const [tenantName, setTenantName] = useState("");
  const [tenantAddress, setTenantAddress] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");
  const [rentAmount, setRentAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [year, setYear] = useState("");
  const [bills, setBills] = useState([]);
  const [error, setError] = useState("");
  const [lastTenYears, setLastTenYears] = useState([]);

  // Function to generate bills based on user input
  const handleGenerateBills = () => {
    if (!validateInput()) {
      return;
    }

    const generatedBills = [];
    let currentMonth = startMonth;

    // Convert startMonth and endMonth to numeric values
    const startMonthNum = monthToNum(numToMonth(startMonth));
    const endMonthNum = monthToNum(numToMonth(endMonth));

    // Push the same object for each month in the range
    for (let i = startMonthNum; i <= endMonthNum; i++) {
      generatedBills.push({
        tenantName,
        tenantAddress,
        ownerName,
        ownerAddress,
        rentAmount,
        dueDate,
        startMonth: numToMonth(i),
        endMonth: numToMonth(i), // Same month for start and end
        year,
      });
    }

    console.log({ generatedBills });
    setBills(generatedBills);
  };

  // Function to convert month name to numeric value
  const monthToNum = (monthName) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames.indexOf(monthName) + 1;
  };

  // Function to convert numeric value to month name
  const numToMonth = (monthNum) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[monthNum - 1];
  };

  // Function to validate user input
  const validateInput = () => {
    if (!tenantName || !rentAmount || !startMonth || !endMonth || !year) {
      setError("Please fill in all fields.");
      return false;
    }
    setError("");
    return true;
  };

  // Function to get the next month
  const getNextMonth = (currentMonth) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentIndex = monthNames.indexOf(currentMonth);
    const nextIndex = currentIndex === 11 ? 0 : currentIndex + 1;
    return monthNames[nextIndex];
  };

  const getLastTenYears = () => {
    const currentYear = new Date().getFullYear();
    const lastTenYears = [];

    for (let i = 0; i < 10; i++) {
      lastTenYears.push(currentYear - i);
    }

    setLastTenYears(lastTenYears);
  };

  useEffect(() => {
    getLastTenYears();
  }, []);

  return (
    <>
    <Breadcrums />
    <div className="container">
      <h3 className="text-center">Rent Bill Generator</h3>
      <form>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <label className="form-label w-100 ">
              Tenant Name
              <input
                className="form-control form-control-sm "
                type="text"
                value={tenantName}
                onChange={(e) => setTenantName(e.target.value)}
              />
            </label>
          </div>

          <div className="col-lg-6 col-sm-12">
            <label className="form-label w-100 ">
              Owner Name
              <input
                className="form-control form-control-sm "
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
              />
            </label>
          </div>
          <div className="col-lg-6 col-sm-12">
            <label className="form-label w-100 ">
              Tenant Address
              <textarea
                className="form-control form-control-sm "
                value={tenantAddress}
                onChange={(e) => setTenantAddress(e.target.value)}
              ></textarea>
            </label>
          </div>
          <div className="col-lg-6 col-sm-12">
            <label className="form-label w-100 ">
              Owner Address
              <textarea
                className="form-control form-control-sm "
                value={ownerAddress}
                onChange={(e) => setOwnerAddress(e.target.value)}
              ></textarea>
            </label>
          </div>
          <div className="col-lg-6 col-sm-12">
            <label className="form-label w-100 ">
              Rent Amount (₹)
              <input
                className="form-control form-control-sm "
                type="number"
                value={rentAmount}
                onChange={(e) => setRentAmount(parseFloat(e.target.value))}
              />
            </label>
          </div>
          <div className="col-lg-6 col-sm-12">
            <label className="form-label w-100 ">
              Start Month
              <select
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
                className="form-select form-select-sm "
              >
                <option value="">Select Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </label>
          </div>
          <div className="col-lg-6 col-sm-12">
            <label className="form-label w-100 ">
              End Month
              <select
                value={endMonth}
                onChange={(e) => setEndMonth(e.target.value)}
                className="form-select form-select-sm "
              >
                <option value="">Select Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </label>
          </div>
          <div className="col-lg-6 col-sm-12">
            <label className="form-label w-100 ">
              Year
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="form-select form-select-sm "
              >
                <option value="">Select Year</option>
                {lastTenYears.map((v) => (
                  <option value={v}>{v}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center p-3">
          <button
            className="btn btn-sm btn-primary"
            type="button"
            onClick={handleGenerateBills}
          >
            Generate Bills
          </button>
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
      <div>
        {bills.length > 0 && (
          <>
            <PDFViewer className="w-100" height="600">
              <Bill data={bills} />
            </PDFViewer>
            <BlobProvider document={<Bill data={bills} />}>
              {({ blob, url, loading, error }) => {
                if (loading) {
                  return "Loading document...";
                }
                if (blob) {
                  return (
                    <>
                      <div className="d-flex align-items-center justify-content-center ">
                        <a
                          className="btn btn-sm btn-success"
                          href={url}
                          download="rent_bills.pdf"
                        >
                          Download PDF
                        </a>
                      </div>
                    </>
                  );
                }
                if (error) {
                  return "Error occurred while generating PDF.";
                }
                return null;
              }}
            </BlobProvider>
          </>
        )}
      </div>
    </div></>
  );
};

export default RentBillGenerator;
