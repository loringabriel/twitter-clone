import Content from "../Content";
import Sidebar from "../Sidebar";

export default function Layout(): JSX.Element {
  return (
    <div className="h-full max-w-[748px]  lg:max-w-[1060px] xl:max-w-screen-xl m-auto  ">
      <div
        className="h-full grid grid-cols-[70px_minmax(400px,_1fr)_0px] md:grid-cols-[70px_minmax(400px,_1fr)_80px]
       lg:grid-cols-[106px_minmax(600px,_1fr)_minmax(280px,_1fr)]
      xl:grid-cols-[minmax(250px,_282px)_minmax(400px,_600px)_350px]
      "
      >
        <Sidebar />
        <div className="h-full border-x border-neutral-700 border-r-0 md:border-r">
          <Content />
        </div>
        <div className="h-full hidden lg:flex">right</div>
      </div>
    </div>
  );
}
