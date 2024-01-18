import Link from "next/link"

const Nav = ({Style}:{Style:String}) => {

  return (
    <nav className={`${Style} items-center gap-4 cursor-pointer text-black`} >
        <Link className=" link-item" href='/'>Home</Link>
        <Link className=" link-item" href='/products'>Shop</Link>
    </nav>
  )
}

export default Nav