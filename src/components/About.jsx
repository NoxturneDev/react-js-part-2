function About() {
  return (
    <>
      {/* about */}
      <section className="content">
        <div className="h-auto py-20 px-[12%] flex gap-5">
          <img
            className="self-center rounded-md h-[400px] w-[400px]"
            src="https://ae01.alicdn.com/kf/H35a66a1cbdc342129f3dee961fa13bcbk.jpg_640x640Q90.jpg_.webp"
            alt=""
          />
          <div className="text-black">
            <h1 className="text-4xl font-bold text-primary-dark">About Us</h1>
            <h4 className="text-primary-dark font-bold">Welcome to our shop</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              esse mollitia voluptatibus, placeat quo quaerat consectetur
              recusandae laborum, commodi officia laudantium nihil totam
              perferendis eos? Voluptatibus veritatis impedit deleniti eos?
            </p>
            <div className="flex text-center gap-[10%]">
              <div className="m-5">
                <h4
                  className="font-bold py-2 px4 text-md rounded-md bg-primary-dark mb-2 text-white">
                  100% HEALTHY
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam, aperiam?
                </p>
              </div>
              <div className="m-5">
                <h4
                  className="font-bold py-2 px4 text-md rounded-md bg-primary-dark mb-2 text-white"
                >
                  100% FRESH
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam, aperiam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;