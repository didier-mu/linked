document.querySelector("header").innerHTML=`
  
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-lg-2 header--logo">
              <a href="../"> 
                <img class="img-fluid logo-header" src="img/logo-linked.svg" alt="">
              </a>
            </div>
            <div class="col-lg-10 col-6 header--navegacion d-flex">
              <nav>
                
                <div class="btn-ham" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="ham-top"></span>
                  <span class="ham-btm"> </span>
                </div>

                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul>
                      <a id="li-projects" href="projects.html">
                        <li>Projects<sup>(100)</sup> </li>
                      </a>
                      <a id="li-writing" href="projects.html">
                        <li>Writing<sup>(100)</sup> </li>
                      </a>
                      <a id="li-about" href="projects.html">
                        <li>About<sup>(100)</sup> </li>
                      </a>
                      <a id="li-teaching" href="projects.html">
                        <li>Teaching<sup>(100)</sup> </li>
                      </a>
                    
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      
`;document.querySelector(".footer").innerHTML=`
    
        <a href="contact.html" class="col-lg-4">
            <h5>CONNECT</h5>
        </a>
      
`;
