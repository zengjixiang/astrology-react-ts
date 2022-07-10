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
// 星座資訊
export default function ZodiacSigns() {
  return (
    <div>
      <h3>星座資訊</h3>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          // top
          width="100%"
        />
        <CardGroup>
          <CardBody>
            <CardTitle tag="h5">星座資訊</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              介紹做相關資訊
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            {/* <button className="btn btn-success" onClick={aspectPage}>詳細介紹 */}
          </CardBody>
        </CardGroup>
      </Card>
    </div>
  );
}
