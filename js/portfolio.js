window.onload = () => {
    const width = window.innerWidth;
    if (width > 768) {
      document.getElementById("aboutDetails").style.display = "block";
    }
  };
  
function toggleAboutDetails() {
    const details = document.getElementById("aboutDetails");
    details.style.display = (details.style.display === "block") ? "none" : "block";
}