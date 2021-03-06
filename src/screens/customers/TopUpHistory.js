import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import "./dashboard.css";

export default function TopUpHistory() {
	return (
		<div className="pt-2 pb-5">
      <h6 className="text-secondary text-center text-md-left">
				Wallet
			</h6>
			<h2 className="mb-3 text-center text-md-left">Topup History</h2>

			<Row className="mt-2">
				<Col>
					<Table striped responsive hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Date</th>
								<th>Name</th>
								<th>Service</th>
								<th>Biller</th>
								<th>Ref</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>01-02-2020</td>
								<td>Ola</td>
								<td>Airtime</td>
								<td>Mtn</td>
								<td>08022835496</td>
							</tr>
							<tr>
								<td>2</td>
								<td>01-02-2020</td>
								<td>Ola Glo</td>
								<td>Data</td>
								<td>Glo</td>
								<td>08022835499</td>
							</tr>
							<tr>
								<td>3</td>
								<td>01-02-2020</td>
								<td>Dino's Decoder</td>
								<td>Cable</td>
								<td>DSTV</td>
								<td>002135667664</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
		</div>
	);
}
