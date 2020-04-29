import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { UseTicketButton, UseTicketLabel } from './styles';

function TicketButton() {
  return (
    <UseTicketButton>
      <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
      <UseTicketLabel>Usar código promocional</UseTicketLabel>
    </UseTicketButton>
  )
}

export default TicketButton;