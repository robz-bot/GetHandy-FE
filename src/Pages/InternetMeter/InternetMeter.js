// import React, { useState } from 'react';
// import {fastSpeedTest} from 'fast-speedtest-api';

// const InternetSpeedTest = () => {
//   const [downloadSpeed, setDownloadSpeed] = useState(null);
//   const [uploadSpeed, setUploadSpeed] = useState(null);
//   const [isTesting, setIsTesting] = useState(false);

//   const runSpeedTest = async () => {
//     setIsTesting(true);

//     try {
//       const speedTest = await fastSpeedTest();

//       const downloadSpeedMbps = speedTest.downloadSpeedMbps.toFixed(2);
//       const uploadSpeedMbps = speedTest.uploadSpeedMbps.toFixed(2);

//       setDownloadSpeed(downloadSpeedMbps);
//       setUploadSpeed(uploadSpeedMbps);
//     } catch (error) {
//       console.error('Speed test error:', error);
//     } finally {
//       setIsTesting(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Internet Speed Test</h2>
//       <button onClick={runSpeedTest} disabled={isTesting}>
//         {isTesting ? 'Testing...' : 'Run Speed Test'}
//       </button>
//       <div>
//         {downloadSpeed && <p>Download Speed: {downloadSpeed} Mbps</p>}
//         {uploadSpeed && <p>Upload Speed: {uploadSpeed} Mbps</p>}
//       </div>
//     </div>
//   );
// };

// export default InternetSpeedTest;
