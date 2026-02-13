import React from 'react';
import GlassCard from './GlassCard';

export default {
  title: 'UI/GlassCard',
  component: GlassCard,
};

export const Default = () => (
  <div style={{ padding: '2rem', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
    <GlassCard style={{ padding: '1.5rem', maxWidth: 400 }}>
      <h4>Glass Card</h4>
      <p style={{ color: '#6b7280' }}>A reusable glassmorphic surface.</p>
    </GlassCard>
  </div>
);
