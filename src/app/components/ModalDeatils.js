'use client';
import Link from "next/link";
import { AutoComplete } from 'primereact/autocomplete';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import SerchInputes from "./SerchInputes";
import IconDetailPage from "../details/[slug]/page";
import Image from "next/image";



function ModalDeatils({ }) {

  return (
    <>
        <div className="modal fade cre-modals-details01" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header border-0 p-0">
                        
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        
                             
                                 <div className="main-details-pages01">
                                    <div className="row m-0 gx-lg-5">
                                        <div className="col-lg-7 position-relative p-0">
                                                <div className="blox-icons-div01">
                                                    
                                                </div>
                                        </div>
                                        <div className="col-lg-5 ps-lg-5">
                                             <div className="rights-text-div015">
                                                 <h4 className="cions-titels"> Home free icon </h4>
                                                 <div className="d-flex mb-3 group-div015 align-items-stretch mt-3">
                                                     <button type="button" className="btn btn-coun-downalod">
                                                         Free Download
                                                     </button>
                                                     <div className="dropdown">
                                                        <a className="btn" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(255,255,255,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                                                        </a>

                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                                                            <li className="sm-headings"> Available file format to download </li>
                                                            <li><button type="button" className="dropdown-item">
                                                              <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(42,42,42,1)"><path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path></svg>   
                                                             </span>   Download SVG </button></li>
                                                            <li><button type="button" className="dropdown-item">
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(42,42,42,1)"><path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path></svg>   
                                                                </span> Download PNG </button></li>
                                                            <li><button type="button" className="dropdown-item">
                                                             <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(42,42,42,1)"><path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path></svg>   
                                                             </span>
                                                               Download JPG </button></li>
                                                        </ul>
                                                    </div>
                                                 </div>

                                                 <div className="row row-cols-1 gx-lg-2 row-cols-lg-3 justify-content-between align-items-center">
                                                    <div className="col">
                                                        <button type="button" className="btn btn-addtocollections">
                                                           <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.75 2.5C9.09721 2.5 11 4.40279 11 6.75V11H6.75C4.40279 11 2.5 9.09721 2.5 6.75C2.5 4.40279 4.40279 2.5 6.75 2.5ZM9 9V6.75C9 5.50736 7.99264 4.5 6.75 4.5C5.50736 4.5 4.5 5.50736 4.5 6.75C4.5 7.99264 5.50736 9 6.75 9H9ZM6.75 13H11V17.25C11 19.5972 9.09721 21.5 6.75 21.5C4.40279 21.5 2.5 19.5972 2.5 17.25C2.5 14.9028 4.40279 13 6.75 13ZM6.75 15C5.50736 15 4.5 16.0074 4.5 17.25C4.5 18.4926 5.50736 19.5 6.75 19.5C7.99264 19.5 9 18.4926 9 17.25V15H6.75ZM17.25 2.5C19.5972 2.5 21.5 4.40279 21.5 6.75C21.5 9.09721 19.5972 11 17.25 11H13V6.75C13 4.40279 14.9028 2.5 17.25 2.5ZM17.25 9C18.4926 9 19.5 7.99264 19.5 6.75C19.5 5.50736 18.4926 4.5 17.25 4.5C16.0074 4.5 15 5.50736 15 6.75V9H17.25ZM13 13H17.25C19.5972 13 21.5 14.9028 21.5 17.25C21.5 19.5972 19.5972 21.5 17.25 21.5C14.9028 21.5 13 19.5972 13 17.25V13ZM15 15V17.25C15 18.4926 16.0074 19.5 17.25 19.5C18.4926 19.5 19.5 18.4926 19.5 17.25C19.5 16.0074 18.4926 15 17.25 15H15Z"></path></svg> 
                                                        </span> Collection </button>
                                                    </div>
                                                    <div className="col">
                                                       <button type="button" className="btn btn-addtocollections">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path></svg>
                                                        </span>
                                                         Share </button>
                                                    </div>
                                                    <div className="col">
                                                        <button type="button" className="btn btn-addtocollections">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path></svg>
                                                        </span>
                                                         Copy SVG </button>
                                                    </div>
                                                     
                                                      
                                                 </div>

                                                 <div className="details-list-modals-lis mt-4">
                                                     <ul className="m-0  ms-0 p-0">
                                                        <li> 
                                                          <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.08697 9H20.9134C21.4657 9 21.9134 9.44772 21.9134 10C21.9134 10.0277 21.9122 10.0554 21.9099 10.083L21.0766 20.083C21.0334 20.6013 20.6001 21 20.08 21H3.9203C3.40021 21 2.96695 20.6013 2.92376 20.083L2.09042 10.083C2.04456 9.53267 2.45355 9.04932 3.00392 9.00345C3.03155 9.00115 3.05925 9 3.08697 9ZM4.84044 19H19.1599L19.8266 11H4.17377L4.84044 19ZM13.4144 5H20.0002C20.5525 5 21.0002 5.44772 21.0002 6V7H3.00017V4C3.00017 3.44772 3.44789 3 4.00017 3H11.4144L13.4144 5Z"></path></svg> </span>  Download in SVG, PNG, ICO, and 4 more formats
                                                        </li>
                                                        <li> 
                                                          <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434ZM12 11C10.6193 11 9.5 9.88071 9.5 8.5C9.5 7.11929 10.6193 6 12 6C13.3807 6 14.5 7.11929 14.5 8.5C14.5 9.88071 13.3807 11 12 11ZM7.52746 16C7.77619 13.75 9.68372 12 12 12C14.3163 12 16.2238 13.75 16.4725 16H7.52746Z"></path></svg> </span>  Free to use under the Digital License 
                                                        </li>
                                                     </ul>
                                                 </div>

                                                 <div className="floows-div01-div w-100">
                                                    <div className="row align-items-center">
                                                        <div className="col-9">
                                                            <div className="d-flex align-items-center">
                                                                <figure className="icons-bg bg-light">
                                                                    <Image loading="lazy" src="/shape-icons015.svg"
                                                                        alt="iconsguru"
                                                                        width={33}
                                                                        height={34} />
                                                                </figure>
                                                                <p> <strong> IconsGuru </strong>
                                                                    <span className="d-block"> 
                                                                       <strong> 7,830 </strong> FREE ICONS
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                             <button className="btn btn-modals-div"> Follow </button>
                                                        </div>
                                                    </div>
                                                    
                                                 </div>

                                                 <h5 className="mt-4 styleigs-list">
                                                  <span className="tags-1cio"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg> </span>   Style: <span className="text-list"> Ze Leah Basic Outline </span> </h5>
                                             </div>
                                        </div>
                                    </div>
                                    <div className="styles-icons-div  comon-rows d-block w-100">
                                        <h4 className="sub-titels-h1">Related Icons with the same style</h4>
                                        <div className="relatesd t-ind-icons d-block w-100">
                                            <div className="row row-cols-1 row-cols-lg-6 gy-2 gy-lg-3">
                                                
                                            </div>
                                        </div>
                                    </div>


                                    <div className="styles-icons-div comon-rows d-block w-100 mb-5 pb-5">
                                        <h4 className="sub-titels-h1"> Related Tags </h4>
                                        <ul className="crm-tagsd d-flex align-items-center flex-wrap m-0 p-0">
                                       
                                        </ul>
                                    </div>
                       
                                </div>
                            
                             
                       
                    </div>
               
                </div>
            </div>
        </div>
    </>

  
  );
}
export default ModalDeatils;

