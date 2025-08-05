import profileImage from "@/assets/profile-image.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="text-xl font-bold">Portfolio.</div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>

      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Hero Section */}
          <div className="space-y-8">
            {/* Hero Text */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight">
                Hello, It's Me<br />
                <span className="text-primary">John Kendric</span><br />
                And I'm a <span className="text-primary">Frontend Developer</span>
              </h1>
              <p className="text-portfolio-text-muted text-lg leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam ornare at ipsum molestie blandit.
              </p>
              
              {/* Social Icons */}
              <div className="flex space-x-4 py-4">
                <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-portfolio-bg transition-all cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-portfolio-bg transition-all cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-portfolio-bg transition-all cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>

              <button className="bg-primary text-portfolio-bg px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all">
                Download CV
              </button>
            </div>

            {/* About Section */}
            <div className="bg-portfolio-card p-8 rounded-3xl space-y-6">
              <div className="flex items-start space-x-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-primary p-1">
                    <img 
                      src={profileImage} 
                      alt="John Kendric - Frontend Developer" 
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    About <span className="text-primary">Me</span>
                  </h3>
                  <h4 className="text-primary font-semibold mb-4">Frontend Developer</h4>
                  <p className="text-portfolio-text-muted leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Aliquam ornare at ipsum molestie blandit neque mauris orci tristique elementum dictumst.
                  </p>
                  <button className="mt-4 bg-primary text-portfolio-bg px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Profile Image (Center) */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 relative">
                  {/* Hexagon Shape */}
                  <div className="absolute inset-0 bg-primary" style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
                  }}></div>
                  <div className="absolute inset-2 bg-portfolio-bg" style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
                  }}>
                    <img 
                      src={profileImage} 
                      alt="John Kendric" 
                      className="w-full h-full object-cover" 
                      style={{
                        clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="bg-portfolio-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">
                Our <span className="text-primary">Services</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-portfolio-bg p-6 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 bg-primary rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-portfolio-bg font-bold">&lt;/&gt;</span>
                  </div>
                  <h4 className="font-semibold">Web Development</h4>
                  <p className="text-sm text-portfolio-text-muted">Lorem ipsum dolor sit amet consectetur elit.</p>
                  <button className="bg-primary text-portfolio-bg px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all">
                    Read More
                  </button>
                </div>
                
                <div className="bg-portfolio-bg p-6 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 bg-primary rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-portfolio-bg font-bold">🎨</span>
                  </div>
                  <h4 className="font-semibold">Graphic Design</h4>
                  <p className="text-sm text-portfolio-text-muted">Lorem ipsum dolor sit amet consectetur elit.</p>
                  <button className="bg-primary text-portfolio-bg px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all">
                    Read More
                  </button>
                </div>
                
                <div className="bg-portfolio-bg p-6 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 bg-primary rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-portfolio-bg font-bold">📱</span>
                  </div>
                  <h4 className="font-semibold">Digital Marketing</h4>
                  <p className="text-sm text-portfolio-text-muted">Lorem ipsum dolor sit amet consectetur elit.</p>
                  <button className="bg-primary text-portfolio-bg px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            {/* Latest Projects */}
            <div className="bg-portfolio-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">
                Latest <span className="text-primary">Project</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[project1, project2, project3, project4, project5, project6].map((project, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-lg">
                    <img 
                      src={project} 
                      alt={`Project ${index + 1}`} 
                      className="w-full h-24 object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Me */}
            <div className="bg-portfolio-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">
                Contact <span className="text-primary">Me!</span>
              </h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-portfolio-bg border border-border rounded-lg px-4 py-3 text-portfolio-text placeholder-portfolio-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-portfolio-bg border border-border rounded-lg px-4 py-3 text-portfolio-text placeholder-portfolio-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full bg-portfolio-bg border border-border rounded-lg px-4 py-3 text-portfolio-text placeholder-portfolio-text-muted focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
                <button className="w-full bg-primary text-portfolio-bg py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;