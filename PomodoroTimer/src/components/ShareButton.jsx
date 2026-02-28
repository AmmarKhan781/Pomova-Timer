export default function ShareButton() {
  const shareSite = () => {
    const url = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: "Pomova Timer",
        text: "Boost your productivity using Pomova Pomodoro Timer",
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Website link copied!");
    }
  };

  return (
    <div className="share-container">
      <button onClick={shareSite} className="share-btn">
        Share Pomova
      </button>
    </div>
  );
}
