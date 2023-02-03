
import './App.css';

function App() {
  return (
    <div className="App">
      {/*상단 광고 */}
      <div class="modal-header border-bottom-0">
        <img src="..." class="rounded max-width: 100%; height: auto;" alt="상단 광고"/>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
      <nav class=" navbar navbar-expand-xl bg-light">
        <div class="flex-column container-fluid">
          <div class="d-flex flex-row container-fluid">
            {/*로고*/}
            <div class="nav flex-row p-2">
              <a class="h-a navbar-brand" href="#">안녕하세요</a>
            </div>                                                                                                                                                                             

            {/*로그인*/}
            <div class="position-absolute top-0 end-0">
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>            
          </div>

          {/*매뉴*/}
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>

              {/*검색*/}
                <div class="position-absolute bottom-0 end-0">
                <form class="d-flex" role="search">  
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div class="row m-5">
        <div class="col-lg-3 col-md-6">
          <div class="card" style={{width: '15rem'}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      
        <div class="col-lg-3 col-md-6">
          <div class="card" style={{width: '15rem'}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        
        <div class="col-lg-3 col-md-6">
          <div class="card" style={{width: '15rem'}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        
        <div class="col-lg-3 col-md-6">
          <div class="card" style={{width: '15rem'}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
