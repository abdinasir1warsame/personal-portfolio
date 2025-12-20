import img from '../assets/images/about-me.png';
export default function AboutSection() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-15 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-2/5">
              <div className="relative">
                <div className="w-full h-80 md:h-96 bg-gradient-to-tr from-[#E11D48]/10 to-[#FBBF24]/10 rounded-xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#E11D48] rounded-xl"></div>
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#FBBF24] rounded-xl"></div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#E11D48]/10 text-[#E11D48] font-medium">
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {/* Infrastructure Meets Application Development */}
                Infrastructure <span className="text-[#E11D48]">
                  Meets
                </span>{' '}
                Application <span className="text-[#FBBF24]">Development</span>
              </h2>
              <p className="text-gray-600 mb-4">
                I'm a DevOps Engineer and Full-Stack Developer specializing in
                building reliable, scalable systems and modern web applications.
                My work spans infrastructure automation, cloud deployments,
                CI/CD pipelines, and application development with a focus on
                maintainability and performance. I combine hands-on coding with
                infrastructure management to deliver solutions that are both
                robust and adaptable. By leveraging tools like AWS, Docker,
                Kubernetes, Terraform, and React, I create systems that are
                efficient, secure, and scalable.
              </p>
              <p className="text-gray-600 mb-6">
                My workflow blends hands-on coding with strategic thinking to
                create apps that are both robust and intuitive. I thrive on
                learning new tools and applying them to build real-world,
                impactful solutions using AI, APIs, and scalable infrastructure.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E11D48]">2+</div>
                  <div className="text-sm text-gray-500">
                    Cloud & DevOps Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E11D48]">5+</div>
                  <div className="text-sm text-gray-500">
                    Core AWS Services Hands-On
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E11D48]">2+</div>
                  <div className="text-sm text-gray-500">
                    Containerized Applications Built (Docker/Kubernetes)
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E11D48]">10+</div>
                  <div className="text-sm text-gray-500">
                    Web Development Projects (React, Node.js, REST APIs)
                  </div>
                </div>
              </div>

              {/* <Button primary>Download Resume</Button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
