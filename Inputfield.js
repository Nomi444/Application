export default function inputfield(props){
    return (
        <div className={props.column}>
              <label htmlFor={props.inputid} className="form-label">{props.inputtext}</label>
              <input type="text"className="form-control" id={props.inputid} placeholder=""  required/>
              <div className="invalid-feedback">
                Valid {props.inputtext} is required.
                

                <div className={props.column}>
              <label htmlFor={props.inputid}className="form-label">{props.inputtext}</label>
              <input type="text"className="form-control" id={props.inputid} placeholder=""  required/>
              <div className="invalid-feedback">
                Valid {props.inputtext} is required.


              </div>
            </div>
              </div>
            </div>
            
    )
}