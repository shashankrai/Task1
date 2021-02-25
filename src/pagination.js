
import { Row, Col } from 'react-bootstrap';
import React from 'react';


function Pagination({currentPage,totalPages }) {
    const current =currentPage;
    const next =current+1;
    const previous =current-1;
    return (
        <div >
                <Row>
                        <Col className="pagination">
                            <a href="#$">First</a>
                            <a href="#%">Previous</a>
                            <span>{`page ${currentPage} of ${totalPages}`}</span>
                            <a href="#%">Next</a>
                            <a href="#%">Last</a>
                        </Col>
                </Row>
        </div>
    )
}
export default Pagination;