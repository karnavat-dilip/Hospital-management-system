import React, { useEffect, useState, useContext } from 'react'
import '@emotion/react'
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuProps, useStyles, options } from "./utils";
import axios from 'axios';
import Schedule from './Scheduler';
import { ShepherdTour, ShepherdTourContext,TourMethods } from 'react-shepherd'
import Start from './Start';
function Appointment() {

  const tourOptions = {
    defaultStepOptions: {
      cancelIcon: {
        enabled: false
      }
    },
    useModalOverlay: false
  };

  const steps = [
    {
      id: 'intro',
      attachTo: { element: '.slot', on: 'bottom' },
      beforeShowPromise: function () {
        return new Promise(function (resolve) {
          setTimeout(function () {
            window.scrollTo(0, 0);
            resolve();
          }, 500);
        });
      },
      buttons: [
        {
          classes: 'shepherd-button-primary',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      scrollTo: false,
      cancelIcon: {
        enabled: true,
      },
      title: 'Welcome to React-Shepherd!',
      text: ['React-Shepherd is a JavaScript library for guiding users through your React app.'],

      when: {
        show: () => {
          console.log('show step');
        },
        hide: () => {
          console.log('hide step');
        }
      }
    },
    {
      id: "second",
      attachTo: {
        element: ".dr_apt",
        on: "top"
      },
      text: [
        "Yuk eksplorasi hasil Tes Minat Bakat-mu dan rekomendasi <b>Jurusan</b> dan Karier."
      ],
      buttons: [
        {
          classes: "btn btn-info",
          text: "Back",
          type: "back"
        },
        {
          classes: "btn btn-success",
          text: "Next",
          type: "next"
        }
      ],
      when: {
        show: () => {
          console.log("show stepp");
        },
        hide: () => {
          console.log("complete step");
        }
      },
      showCancelLink: false,
      cancelIcon: {
        enabled: true,
      },
      scrollTo: true,
      modalOverlayOpeningPadding: 4,
      useModalOverlay: false,
      canClickTarget: false
    },
    {
      id: "Third",
      attachTo: {
        element: ".lb",
        on: "left"
      },
      text: [
        "speciality is here..."
      ],
      buttons: [
        {
          classes: "btn btn-info",
          text: "Back",
          type: "back"
        },
        {
          classes: "btn btn-success",
          text: "Next",
          type: "next"
        }
      ],
      when: {
        show: () => {
          console.log("show stepp");
        },
        hide: () => {
          console.log("complete step");
        }
      },
      showCancelLink: false,
      cancelIcon: {
        enabled: true,
      },
      scrollTo: true,
      modalOverlayOpeningPadding: 4,
      useModalOverlay: false,
      canClickTarget: false
    },
    {
      id: "four",
      attachTo: {
        element: ".manu",
        on: "left"
      },
      text: [
        "Menubar is here..."
      ],
      buttons: [
        {
          classes: "btn btn-info",
          text: "Back",
          type: "back"
        },
        {
          classes: "btn btn-success",
          text: "Done",
          type: "cancel"
        }
      ],
      when: {
        show: () => {
          console.log("show stepp");
        },
        hide: () => {
          console.log("complete step");
        }
      },
      showCancelLink: false,
      scrollTo: true,
      cancelIcon: {
        enabled: true,
      },
      modalOverlayOpeningPadding: 4,
      useModalOverlay: false,
      canClickTarget: false
    }
    // ...
  ];

  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [arr, setArr] = useState([]);
  const [time, settime] = useState()

  const isAllSelected =
    options.length > 0 && selected.length === options.length;
  console.log(isAllSelected);

  // creating button element
  let button = document.createElement('BUTTON');
  button.setAttribute('id', 'btn')
  button.setAttribute('data-target', '#exampleModalCenter')
  button.setAttribute('data-toggle', 'modal')
  button.setAttribute('type', 'button')


  // creating text to be
  //displayed on button
  let text = document.createTextNode("New");

  // appending text to button
  button.appendChild(text);
  useEffect(() => {
    let slot = document.getElementById('slot')
    slot.appendChild(button).style.display = 'none'
    if (isAllSelected == true) {
      // appending button to div
      let btn = document.getElementById('btn')
      btn.style.display = 'block'


    } else {
      console.log(document.getElementById('btn'));

      if (document.getElementById('btn')) {

        document.getElementById('btn').style.display = 'none'
      }
    }
  })

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(value);
  };

  useEffect(() => {
    const appointment_date = async () => {
      const data = await axios.get('/appointment')
      settime(data.data)
    }
    appointment_date()
  }, [])
  console.log(time);
  let dtformat = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
  const ts = new Date('2100-01-05T06:00:00').getTime();

  const x = new Date('2100-01-05T06:00:00')
  const x1 = new Date('2100-01-05T06:00:00')
  const x2 = new Date('2100-01-05T06:00:00')
  const x3 = new Date('2100-01-05T06:00:00')
  console.log(typeof x);

  setInterval(() => {

  }, 1000);

  const expectedTime = []
  const expectedTime1 = []
  const expectedTime2 = []
  const expectedTime3 = []

  for (let i = 0; i < 11; i++) {
    let t = dtformat.format(x.setMinutes(x.getMinutes() + 60));
    let t1 = dtformat.format(x1.setMinutes(x1.getMinutes() + 30));
    let t2 = dtformat.format(x2.setMinutes(x2.getMinutes() + 70));
    let t3 = dtformat.format(x3.setMinutes(x3.getMinutes() + 75));

    var time1 = t.toString()
    var time2 = t1.toString()
    var time3 = t2.toString()
    var time4 = t3.toString()

    expectedTime.push(time1)
    expectedTime1.push(time2)
    expectedTime2.push(time3)
    expectedTime3.push(time4)
  }

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  useEffect(() => {
    const from_time = document.getElementById('from_time')
    const end_time = document.getElementById('end_time')
    from_time.value = expectedTime[0]
    end_time.value = expectedTime[1]
    const dropdown = document.getElementById('dropdown_value')
    setArr(dropdown[0].value.split(","))
    dropdown.addEventListener('change', e => {
      const str = e.target.value;
      const arr = str.split(",");
      setArr(arr);
    })
  }, [])

  return (


    <div>
      <ShepherdTour steps={steps} tourOptions={tourOptions}>
        <TourMethods>
          {tourContext => <Start startTour={tourContext} />}
        </TourMethods>
      </ShepherdTour>
      <div>
        <h1 className='Title'>Doctor Appointment</h1>
      </div>
      <div className='dr_apt'>
        <label className='lb'>Speciality</label>

        <select className='dropdown' id='dropdown_value' >
          <option value={'halfHour'}>All</option>
          <option value={'hour'}>Radiologist</option>
          <option value={'quarterHour'}>Pediatrician</option>
          <option value={'hourstart'}>OB-Gyn Specialist</option>

        </select>
        <label className='lb'>Doctor/Clinic</label>
        <div>
          <FormControl className={classes.formControl} >
            {/* <InputLabel id="mutiple-select-label">Multiple Select</InputLabel> */}
            <Select
              labelId="mutiple-select-label"
              multiple
              value={selected}
              onChange={handleChange}
              renderValue={(s) => ""}
              MenuProps={MenuProps}
              style={{
                position: 'relative',
                left: '22px',
                height: '31px'
              }}
            >
              <MenuItem
                value="all"
                classes={{
                  root: isAllSelected ? classes.selectedAll : ""
                }}
              >
                <ListItemIcon>
                  <Checkbox
                    classes={{ indeterminate: classes.indeterminateColor }}
                    checked={isAllSelected}
                    indeterminate={
                      selected.length > 0 && selected.length < options.length
                    }
                  />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.selectAllText }}
                  primary="Select All"
                />
              </MenuItem>
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  <ListItemIcon>
                    <Checkbox checked={selected.indexOf(option) > -1} />
                  </ListItemIcon>
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <label className='lb'>Date</label>
        <input type="text" style={{
          left: '31px',
          position: 'relative'
        }} defaultValue={today} />

        <div className='slot' id='slot'>

          <Schedule />

          {/* <div id='time_stamp'>
            {
              arr.map((currentValue, index) => {
                console.log(typeof currentValue, index);
                return (
                  <>
                    <div>
                      <table>
                      <tbody data-date={ts} value={ts}>
                      <tr>
                      <td className='td1'>
                              <span key={index}>{currentValue}</span>
                            </td>
                            <td className='td2' id='td2'></td>
                            </tr>
                          <tr style={{ height: '29px' }}>
                          <td className='td1'>
                            </td>
                            <td className='td2' data-date={ts}>

                            </td>
                            </tr>
                        </tbody>
                      </table>
                    </div>

                    </>
                    )
              })
            }
          </div> */}


          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Doctor appointment
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className='patient_appintment'>
                    <div className='name_dt'>
                      <h6>Dr.hardik</h6>
                      <div>
                        <label>Date:</label>
                        <span>{today}</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label>From time:</label>
                        <input type="text" id='from_time' />
                      </div>
                      <div>
                        <label>end time:</label>
                        <input type="text" id='end_time' />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label>Name:</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div style={{ display: 'contents' }}>
          <div className='color-check' style={{ backgroundColor: 'Highlight' }}></div>
          <h6 className='content'>Unconfirmed</h6>
          <div className='color-check' style={{ backgroundColor: 'gray' }}></div>
          <h6 className='content'>Confirmed</h6>
          <div className='color-check' style={{ backgroundColor: 'green' }}></div>
          <h6 className='content'>Arrived</h6>
          <div className='color-check' style={{ backgroundColor: 'violet' }}></div>
          <h6 className='content'>Waiting</h6>
        </div>

      </div>
    </div >

  )
}

export default Appointment
