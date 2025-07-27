const calculateTargetPosition = (containerRect, topCardRect, selected ) => {
  if (!containerRect ||!topCardRect) {
    
    return { x: 0, y: 0 };
  }
  const yAdjustment = selected * 350;
  const targetX = containerRect.width - topCardRect.width - 150;
  const targetY = topCardRect.top - containerRect.top - 100 - yAdjustment;

  return { x: targetX, y: targetY };
}

export default calculateTargetPosition;