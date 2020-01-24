import React, { useState, useEffect } from 'react'
import useGlobal from '../../services/useGlobal'
import MainLayout from '../../layouts/MainLayout'

function Pets(props) {
	
	const searchState = {
		search: ''
	}

	const [state, setState] = useState(searchState)
	const [gState, gActions] = useGlobal()

	useEffect(() => {
		if(!gState.petsLoaded){
			gActions.getPets()
		}
	})
	const tableHeader = [
		{
			title: 'Name',
			key: 'name',
		},
		{
			title: 'Breed',
			key: 'breed',
		},
		{
			title: 'Type',
			key: 'type',
		},
		{
			title: 'Size',
			key: 'size',
		},
		{
			title: 'Owner',
			key: 'owner',
		},
		{
			title: '',
			key: 'actions'
		}
	]

	const tableData = () => {
		if(state.search.legth > 3) {
			return gState.pets.filter(pets => JSON.stringify(pets).search(new RegExp(state.search, 'ig')) > -1)
		}
		return gState.pets
	}

	const petOption = (
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
						<div className=" bg-light rounded rounded-pill shadow-sm">
							<div className="input-group search ">
								<input type="search" placeholder="What're you searching for?" aria-describedby="button-search" className="form-control border-0 bg-light"/>
								<div className="input-group-append">
									<button id="button-seacrh" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
								</div>
							</div>
						</div>
					</div>
					<div className="col d-flex justify-content-end">
						<button className='btn btn-primary btn-sm'><i class="fas fa-plus-circle"></i> Add Pet</button>
					</div>
				</div>
			</div>

			<div className="records">
				<div className="record-header">
					<div className="breadcrumb">
						Breadcrumb
					</div>
					<span className="record-title">
						Pets
					</span>
					{' '}
					<span className="record-subtitle small">
						Manage All Pet
					</span>
				</div>

				<div className="card">
					<div className="card-body">
						<div className='table-border'>
							<table className='table table-sm table-hover table-condesed'>
								<thead>
									<tr>
										{tableHeader.map(header => (
											<th key={header.key}>{header.title}</th>
										))}
									</tr>
								</thead>
								<tbody>
									{tableData().map(pet => (
										<tr key= {pet._id}>
											<td>{pet.name}</td>
											<td>{pet.breed}</td>
											<td>{pet.type}</td>
											<td>{pet.size}</td>
											{pet.owner !== null ? <td>{pet.owner.firstname} {pet.owner.lastname}</td> : <td></td>}
											<td>{petOption}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}

export default Pets
