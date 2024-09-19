import React, { useMemo } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import { leadsActions, leadsSelectors} from "../slice/leadsSlice";
import { useActionCreators, useAppSelector } from "../../store";
import { taskDate, todayDate } from "../hooks";
import { Status } from "../../shared/ui";



export const LeadsCard = () => {
  const setShow = useActionCreators(leadsActions).setShowCard;
  const show = useAppSelector(leadsSelectors.showCard)
  const lead = useAppSelector(leadsSelectors.lead)
  const taskD = useMemo(()=> taskDate(lead.closest_task_at), [lead])

  const handleClose = () => setShow(false);
  
  return (
    <>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>
            {lead.name} 
          <Status color = {taskD.statusColor}/>
          </Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>{todayDate}</ListGroup.Item>
      <ListGroup.Item><b>id: </b>{lead.id}</ListGroup.Item>
      <ListGroup.Item><b>Сроки выполнения задачи: </b><>{taskD.statusTask}</></ListGroup.Item>
    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
