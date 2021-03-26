import React from "react";

function alertUpdateForm({ alert, onChangeForm, onEditAlert }) {


    function handleInputChange(event) {
        onChangeForm(event.target.name, event.target.value);
      }

  

      function handleSubmit(event) {
        event.preventDefault();

        console.log(alert)
        fetch(`http://localhost:3000/alerts/${alert.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(alert),
        })
          .then((r) => r.json())
          .then(onEditAlert);
      }
    
        if (!alert) return null;

        const { event, image, info, time, place } = alert;

return (
<form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Event Name"
            name="event"
            value={event}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Image"
            name="image"
            value={image}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Information"
            name="info"
            value={info}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Time"
            name="time"
            value={time}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            name="place"
            value={place}
            onChange={handleInputChange}
          />
        </div>
      
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
)

}

export default alertUpdateForm