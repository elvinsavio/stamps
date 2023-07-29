export default function About() {
  return (
    <div className="flex flex-col justify-around min-h-screen">
      <div className="flex-1 h-screen min-h-[300px] font-mark bg-red-50 p-2">
        <div className="flex flex-col w-1/2">
        <h1 className="text-3xl">About Us</h1>
        <span className="text-sm font-anvir">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae officiis voluptate similique cupiditate
          corrupti velit, numquam ullam! Illo beatae iure similique exercitationem laboriosam delectus distinctio atque
          eligendi alias excepturi.
        </span>
        </div>
      </div>
      <div className="flex-1 h-screen min-h-[300px]">constact us</div>
    </div>
  );
}
