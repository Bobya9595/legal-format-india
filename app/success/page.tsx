export default function SuccessPage() {
  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h1>Payment Successful 🎉</h1>
      <p>Your document is ready.</p>

      <a href="/download">
        <button
          style={{
            padding:"12px 20px",
            background:"#000",
            color:"#fff",
            borderRadius:"8px",
            border:"none",
            cursor:"pointer"
          }}
        >
          Download Document
        </button>
      </a>
    </div>
  );
}
