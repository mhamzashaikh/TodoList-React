
import './List.css';

function List(props) {

    return (

        <div className="myList">
            <li>
                {props.editTodoIndex === props.myId ? (<input className='input-enable'
                    value={props.data}
                    onChange={(e) => {
                        props.onUpdate(props.myId, e.target.value);
                    }}
                />) : (
                    <input className='input-disable' value={props.data} onChange={props.myOnChangeHandler} readOnly />
                )}

                <div className="myIcons">

                    {/* Updating icon  */}
                    <button className="myButtons updateIcon" onClick={() => {
                        if (props.editTodoIndex === props.myId) {
                            props.setEditTodoIndex(null);
                        }
                        else {
                            props.onEdit(props.myId);

                        }

                    }}>
                        {props.editTodoIndex === props.myId ? "Update" : "Edit"}
                    </button>

                    {/* Deleting ion */}
                    <button className="myButtons deleteIcon" onClick={() => { props.onDelete(props.myId) }}>
                        delete
                    </button>
                </div>
            </li>
        </div>






    );
}

export default List;