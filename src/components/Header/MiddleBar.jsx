import DesktopMenu from "./DesktopMenu"
import MobilMenu from "./MobilMenu"



const MiddleBar = () => {
  return (
    <>
        <nav className="lg:hidden">
            <MobilMenu></MobilMenu>
        </nav>

        <nav className="hidden lg:flex">
            <DesktopMenu></DesktopMenu>
        </nav>
    </>
  )
}

export default MiddleBar