import React, { useState, useEffect } from 'react'
import useGlobal from '../../services/useGlobal'
import MainLayout from '../../layouts/MainLayout'

function Bookings(props) {

	const searchState = {
		search: ''
	}

	const [state, setState] = useState(searchState)
	const [gState, gActions] = useGlobal()

	useEffect(() => {
		if(!gState.bookingsLoaded){
			gActions.getBookings()
		}
	})

	console.log(gState.s)

	const tableHeader = [
		{
			title: 'Pets',
			key: 'pets',
		},
		{
			title: 'Check In',
			key: 'checkin',
		},
		{
			title: 'Check Out',
			key: 'checkout',
		},
		{
			title: 'Book By',
			key: 'bookby',
		},
		{
			title: 'Status',
			key: 'status',
		},
		{
			title: '',
			key: 'actions'
		}
	]

	const tableData = () => {
		if(state.search.legth > 3) {
			return gState.bookings.filter(bookings => JSON.stringify(bookings).search(new RegExp(state.search, 'ig')) > -1)
		}
		return gState.bookings
	}

	const bookingOption = (
		<div>
		<span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		</span>
		<div className="dropdown-menu" aria-labelledby="navbarDropdown">
			<button className='dropdown-item'>Edit</button>
			<div className="dropdown-divider"></div>
			<form>
				<button className="dropdown-item" type='submit' >Delete</button>
			</form>	
		</div>
		</div>
	)

	return (
		<MainLayout props={props}>
			<div className="filters">
				<div className="row">
					<div className="col">
						<button className='btn btn-success btn-sm'>Search</button>
					</div>
					<div className="col d-flex justify-content-end">
						<button className='btn btn-primary btn-sm'>Add Booking</button>
					</div>
				</div>
			</div>

			<div className="records">
				<div className="record-header">
					<div className="breadcrumb">
						Breadcrumb
					</div>
					<span className="record-title">
						Bookings
					</span>
					{' '}
					<span className="record-subtitle small">
						Manage All Booking
					</span>
				</div>

				<div className="card">
					<div className="card-body">
						<table className='table table-sm'>
							<thead>
								<tr>
									{tableHeader.map(header => (
										<th key={header.key}>{header.title}</th>
									))}
								</tr>
							</thead>
							<tbody>
								{tableData().map(booking => (
									<tr key= {booking._id}>
										{booking.pet.map(pet => (
												<td key={pet._id}>{ pet.name }</td>
										))}
										<td>{ booking.checkIn }</td>
										<td>{ booking.checkOut }</td>
										<td>{ booking.bookBy.firstname } { booking.bookBy.lastname }</td>
										<td>{ booking.status }</td>
										<td>{ bookingOption }</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}

export default Bookings