function Menu() {
  return (
    <>
      {/* menu */}
      <section className="content">
        <div className="h-auto py-20 px-[12%] flex flex-col gap-5 text-center m-auto">
          <div className="text-black">
            <h1 className="text-4xl font-bold text-primary-dark">Menu & Pricing</h1>
            <h4 className="text-primary-dark font-bold">Best Seller our Menu</h4>
          </div>
          <div className="flex gap-2">
            <div className="p-2 font-bold">
              <img
                src="https://ae01.alicdn.com/kf/H35a66a1cbdc342129f3dee961fa13bcbk.jpg_640x640Q90.jpg_.webp"
                alt=""
                className="p-2 h-[80%] rounded-1/2 w-[80%]"
              />
              <h3>Lorem, ipsum dolor.</h3>
              <p>Rp.200.000</p>
            </div>
            <div className="p-2 font-bold">
              <img
                src="https://ae01.alicdn.com/kf/H35a66a1cbdc342129f3dee961fa13bcbk.jpg_640x640Q90.jpg_.webp"
                alt=""
                className="p-2 h-[80%] rounded-1/2 w-[80%]"
              />
              <h3>Lorem, ipsum dolor.</h3>
              <p>Rp.200.000</p>
            </div>
            <div className="p-2 font-bold">
              <img
                src="https://ae01.alicdn.com/kf/H35a66a1cbdc342129f3dee961fa13bcbk.jpg_640x640Q90.jpg_.webp"
                alt=""
                className="p-2 h-[80%] rounded-1/2 w-[80%]"
              />
              <h3>Lorem, ipsum dolor.</h3>
              <p>Rp.200.000</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu;