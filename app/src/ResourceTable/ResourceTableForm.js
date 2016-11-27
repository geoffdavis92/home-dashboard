import React, { Component } from 'react'

export default class ResourceTableForm extends Component {
	constructor() {
		super()
		this.handleFormSubmission = this.handleFormSubmission.bind(this)
	}
	handleFormSubmission(e) {
		e.preventDefault();
		console.log('RTF submit!')
		this.props.formUpdateCallback({
			id: `${this.ItemField.value.replace(/\s$/,'').replace(/\s/g,'-').toLowerCase()}-${this.CountField.value}-${this.UnitField.value}`,
			title: this.ItemField.value,
			count: this.CountField.value,
			unit: this.UnitField.value,
			timestamp: new Date(Date.now())
		})
		this.resourceForm.reset()
	}
	render() {
		return(
			<tr>
				<td colSpan={5}>
					<form id='resource-form' 
						onSubmit={this.handleFormSubmission}
						ref={ref => this.resourceForm=ref}
					>
						<div className='row'>
							<div className='input-field inline col s4'>
								<input 
									type='text' 
									name='item' 
									id='item'
									ref={ref => this.ItemField=ref}
								/>
								<label htmlFor='item'>Item:</label>
							</div>
							<div className='input-field inline col s4'>
								<input 
									type='number' 
									name='count' 
									id='count'
									ref={ref => this.CountField=ref}
								/>
								<label htmlFor='count'>Count:</label>
							</div>
							<div className='input-field inline col s4'>
								<input 
									type='text' 
									name='unit' 
									id='unit'
									ref={ref => this.UnitField=ref}
								/>
								<label htmlFor='unit'>Unit:</label>
							</div>
						</div>
		        		<input type="submit" className="hide"/>
					</form>
				</td>
			</tr>
		)
	}
}