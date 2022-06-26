import './App.css';
import { Modal, ModelToggler } from './components/Modal';
import Item from "./components/Item";

const data = [
    {
        id : 123,
        image : "https://avatars.mds.yandex.net/i?id=2d657aaff0283cf3f53374c46d33cfe3-4230974-images-thumbs&n=13",
        title : "Nike T-shirt",
        description : "A nice nike brand t-shirt for summer", 
        tagLine : ["Clothes", "Summer", "T-shirt", "Red"],
        colors : ["#db143c", "#ffce2c"],
        price : 12,
        ownerId : "Me"
    }
]

const App = () => {
    return(
        <div className='App container-fluid'>
            
            <Modal modalId="loginPopUp" title="Login" cancelText="Cancel" submitText="Login">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                </form>
            </Modal>

            <div className='header row border-bottom'>
                <div className='col text-end pt-1 me-1'>
                    <ModelToggler className="btn btn-sm btn-primary" modalId="loginPopUp" title="login" /> 
                </div>
            </div>

            {/* body  */}
            <div className='container m-auto body row'>
                
                {/* top-bar  */}
                <div className='col-12 p-3 d-flex'>

                    <div className='d-none d-sm-flex me-auto'>

                        <div className="dropdown me-1">
                            <button 
                                className="btn btn-sm btn-secondary dropdown-toggle" type="button" 
                                id="dropDownOrderBy" data-bs-toggle="dropdown" aria-expanded="false"
                            > Order By 
                            </button>

                            <ul className="dropdown-menu" aria-labelledby="dropDownOrderBy">
                                <li><a className="dropdown-item" href="#">Item Id</a></li>
                                <li><a className="dropdown-item" href="#">Price</a></li>
                                <li><a className="dropdown-item" href="#">Category</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <button 
                                className="btn btn-sm btn-secondary dropdown-toggle" type="button" 
                                id="dropDownItemPerList" data-bs-toggle="dropdown" aria-expanded="false"
                            > Item Per List 
                            </button>

                            <ul className="dropdown-menu" aria-labelledby="dropDownItemPerList">
                                <li><a className="dropdown-item" href="#">10</a></li>
                                <li><a className="dropdown-item" href="#">15</a></li>
                                <li><a className="dropdown-item" href="#">20</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className='d-flex'>
                        <form className="d-flex me-2">
                            <input className="form-control btn-sm me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="d-none btn-sm d-sm-inline-flex align-items-center btn btn-outline-success" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 18 18">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                                Search
                            </button>
                        </form>
                        <button className='btn btn-sm btn-primary'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg> 
                            New <span className="d-none d-sm-inline">Item</span>
                        </button>
                    </div>

                </div>

                {/* table block  */}
                <div className='col-12 table-responsive'>

                    <table className="table">

                        <thead>
                            <tr>
                                <th scope="col">#Id</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Tag line</th>
                                <th scope="col">Colors</th>
                                <th scope="col">Price</th>
                                <th scope="col">Owner</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.map( item => {
                                    const { id, image, title, description, tagLine, colors, price, ownerId} = item;
                                    return(
                                        <Item 
                                            key={id}
                                            id = {id} 
                                            image = {image}
                                            title = {title}
                                            description = {description}
                                            tagLine = {tagLine}
                                            colors = {colors}
                                            price = {price}
                                            ownerId = {ownerId}
                                        />
                                    );
                                })
                            }

                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    )
}

export default App