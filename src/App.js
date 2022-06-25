import './App.css';
import { Modal, ModelToggler } from './components/Modal';
import Item from "./components/Item";

const data = [
    {
        id : 123,
        image : "Image",
        title : "Nike T-shirt",
        description : "A nice nike brand t-shirt for summer", 
        tagLine : ["Clothes", "Summer", "T-shirt", "Red", "Nike"],
        colors : ["#db143c", "#ffce2c"],
        price : 12
    }
]

const App = () => {
    return(
        <div className='App container-fluid'>
            <Modal modalId="loginPopUp" title="Login" cancelText="Cancel" submitText="Login">
                <span>Content...</span>
            </Modal>

            <div className='header row border-bottom'>
                <div className='col text-end pt-1 me-1'>
                    <ModelToggler className="btn btn-sm btn-primary" modalId="loginPopUp" title="login" /> 
                </div>
            </div>

            {/* body  */}
            <div className='body row'>
                
                {/* top-bar  */}
                <div className='col-12 p-3 d-flex'>

                    <div className='d-none d-sm-flex me-auto'>

                        <div class="dropdown me-1">
                            <button 
                                class="btn btn-sm btn-secondary dropdown-toggle" type="button" 
                                id="dropDownOrderBy" data-bs-toggle="dropdown" aria-expanded="false"
                            > Order By 
                            </button>

                            <ul class="dropdown-menu" aria-labelledby="dropDownOrderBy">
                                <li><a class="dropdown-item" href="#">Item Id</a></li>
                                <li><a class="dropdown-item" href="#">Price</a></li>
                                <li><a class="dropdown-item" href="#">Category</a></li>
                            </ul>
                        </div>

                        <div class="dropdown">
                            <button 
                                class="btn btn-sm btn-secondary dropdown-toggle" type="button" 
                                id="dropDownItemPerList" data-bs-toggle="dropdown" aria-expanded="false"
                            > Item Per List 
                            </button>

                            <ul class="dropdown-menu" aria-labelledby="dropDownItemPerList">
                                <li><a class="dropdown-item" href="#">10</a></li>
                                <li><a class="dropdown-item" href="#">15</a></li>
                                <li><a class="dropdown-item" href="#">20</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className='d-flex'>
                        <form class="d-flex me-2">
                            <input class="form-control btn-sm me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="d-none btn-sm d-sm-inline-block btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <button className='btn btn-sm btn-primary'>New <span className="d-none d-sm-inline">Item</span></button>
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map( item => {
                                    const { id, image, title, description, tagLine, colors, price} = item;
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