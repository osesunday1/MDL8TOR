import React, { useState } from 'react';
import styled from 'styled-components';
import { jsPDF } from 'jspdf'
import Modal from '../UIElements/Modal';


// Styled components
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
`;

const DoorPreview = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  height: 800px;
`;

const SlabImage = styled.img`
  width: 100%;
  max-width: 300px;
  position: absolute;
  z-index: 1;
`;

const OverlayImage = styled.img`
  width: 100%;
  max-width: 300px;
  position: absolute;
  z-index: 2;
`;

const FormContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: var(--brown0);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const Summary = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 10px;
`;

const SummaryItem = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const TotalPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

const DoorDesigner = () => {
    const glasses = [
      { name: 'Mini Glass', manufacturer: 'GlassCorp', price: 200, value: '2glass' },
      { name: 'Tembrone Glass', manufacturer: 'WindowPro', price: 400, value: '4glass' },
    ];
  
    const embossments = [
      { name: 'Embossment 1', manufacturer: 'EmbossCo', price: 150, value: 'emb1' },
      { name: 'Embossment 2', manufacturer: 'DecorEmboss', price: 250, value: 'emb2' },
    ];
  
    const locks = [
      { name: 'Smart Lock', manufacturer: 'Perius', price: 170, value: 'lock1' },
      { name: 'Simple Lock', manufacturer: 'ResEmboss', price: 30, value: 'lock2' },
      { name: 'Hybrid Lock', manufacturer: 'Hydrava', price: 220, value: 'lock3' },
    ];
  
    const [option, setOption] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedLockItem, setSelectedLockItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOptionChange = (e) => {
      setOption(e.target.value);
      setSelectedItem(null);
    };
  
    const handleSelectionChange = (e) => {
      const value = e.target.value;
      if (option === 'glass') {
        const selectedGlass = glasses.find((glass) => glass.value === value);
        setSelectedItem(selectedGlass);
      } else if (option === 'embossment') {
        const selectedEmboss = embossments.find((emboss) => emboss.value === value);
        setSelectedItem(selectedEmboss);
      }
    };
  
    const handleLockChange = (e) => {
      const selectedLock = locks.find((lock) => lock.value === e.target.value);
      setSelectedLockItem(selectedLock);
    };
  
    const totalPrice = (selectedItem ? selectedItem.price : 0) + (selectedLockItem ? selectedLockItem.price : 0);
  
    const handleSendOrder = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    const handleProceed = () => {
      setIsModalOpen(false);
  
      // PDF generation logic
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text('Order Summary', 20, 20);
  
      const selections = [];
      if (selectedItem) selections.push(selectedItem);
      if (selectedLockItem) selections.push(selectedLockItem);
  
      selections.forEach((item, index) => {
        doc.setFontSize(12);
        doc.text(`${item.name} - ${item.manufacturer} ($${item.price})`, 20, 30 + index * 10);
      });
  
      doc.setFontSize(14);
      doc.text(`Total Price: $${totalPrice}`, 20, 30 + selections.length * 10 + 10);
  
      doc.save('order-summary.pdf');
    };
  
    return (
      <Container>
        <DoorPreview>
          {/* Door Image */}
          <SlabImage src="/slab.png" alt="Plain Door" />
          {/* Overlay Images */}
          {selectedItem && <OverlayImage src={`/${selectedItem.value}.png`} alt="Design Overlay" />}
          {selectedLockItem && <OverlayImage src={`/${selectedLockItem.value}.png`} alt="Lock Overlay" />}
        </DoorPreview>
  
        <FormContainer>
          <form>
            {/* Glass or Embossment Selection */}
            <Label>Select Glass or Embossment:</Label>
            <Select value={option} onChange={handleOptionChange}>
              <option value="none">None</option>
              <option value="glass">Glass</option>
              <option value="embossment">Embossment</option>
            </Select>
  
            {option === 'glass' && (
              <>
                <Label>Select Glass:</Label>
                <Select value={selectedItem ? selectedItem.value : ''} onChange={handleSelectionChange}>
                  <option value="none">None</option>
                  {glasses.map((glass) => (
                    <option key={glass.value} value={glass.value}>
                      {glass.name} - (${glass.price})
                    </option>
                  ))}
                </Select>
              </>
            )}
  
            {option === 'embossment' && (
              <>
                <Label>Select Embossment:</Label>
                <Select value={selectedItem ? selectedItem.value : ''} onChange={handleSelectionChange}>
                  <option value="none">None</option>
                  {embossments.map((emboss) => (
                    <option key={emboss.value} value={emboss.value}>
                      {emboss.name} - (${emboss.price})
                    </option>
                  ))}
                </Select>
              </>
            )}
  
            {/* Lock Selection */}
            <Label>Select Lock:</Label>
            <Select value={selectedLockItem ? selectedLockItem.value : 'none'} onChange={handleLockChange}>
              <option value="none">None</option>
              {locks.map((lock) => (
                <option key={lock.value} value={lock.value}>
                  {lock.name} - (${lock.price})
                </option>
              ))}
            </Select>
  
            <Button type="button" onClick={handleSendOrder}>Send Order</Button>
          </form>
  
          {/* Modal to Confirm Selections */}
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            selections={[selectedItem, selectedLockItem].filter(Boolean)}
            totalPrice={totalPrice}
            onProceed={handleProceed}
          />
        </FormContainer>
      </Container>
    );
  };
  
  export default DoorDesigner;