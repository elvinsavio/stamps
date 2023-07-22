export default function Footer() {
  return (
    <div className="bg-brand-green font-mark p-2 snap-end bg-pale flex items-center justify-center">
      <div className="m-2 p-2 flex flex-col gap-2 sm:p-10 bg-white/50 ">
        <h3>Subscribe and stay on top of our latest news and promotions</h3>
        <div className="gap-2  flex justify-center flex-col sm:flex-row">
          <input className="px-5 py-2 outline outline-black outline-1"  placeholder="Enter your email here"></input>
          <button className="px-5 py-2 bg-red-shade hover:scale-[105%] hover:shadow-lg trans">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
