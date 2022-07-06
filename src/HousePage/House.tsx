import * as React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';
import '../style.css';
// 宮位資訊
export default function House() {
  return (
    <div>
      <h3>宮位資訊</h3>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardGroup>
          <CardBody>
            <CardTitle tag="h5">宮位資訊</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              介紹宮位相關資訊
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            {/* <button className="btn btn-success" onClick={housePage}>詳細介紹 */}
          </CardBody>
        </CardGroup>
      </Card>
    </div>
  );
}
