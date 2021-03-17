
function GroupCard(props) {

    const { name, description, members } = props;

    function renderMembers() {
        return members.map((item, index) => {
            if (index >= 3) {
                return null;
            } else {
                return <div className="circle" key={index}>{item.charAt(0)}</div>
            }

        })
    }

    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header">
                    {name}
                </div>
                <div style={{ display: "flex" }}>
                    {renderMembers()}
                    {members.length > 3 ? (<div className="circle">{`+${members.length - 3}`}
                    </div>)
                        : null
                    }
                </div>

                <div className="card-body">
                    {description}
                </div>
            </div>
        </div>
    )
}
export default GroupCard