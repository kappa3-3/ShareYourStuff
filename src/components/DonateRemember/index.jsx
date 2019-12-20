import React from "react";
import './style.scss';

export default function DonateRemember() {

        return (
            <>
                <div className='donate-remember-warning'>
                    <h1>Remember!</h1>
                    {this.props.active === 1
                    && <span>Fill in all the details about your package. It will let us know who should we support.</span>
                    }
                    {this.props.active === 2
                    && <span>All the items pack in 60l trash bags. More information how to pack the items you can find under the LINK.</span>
                    }
                    {this.props.active === 3
                    && <span>You can type in specific organization you have in mind. You can also search for one in a dropdown menu.</span>
                    }
                    {this.props.active === 4
                    && <span>Put in the pick up address and time.</span>
                    }
                </div>
            </>
        );
}
