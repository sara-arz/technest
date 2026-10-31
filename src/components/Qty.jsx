// Controlled quantity stepper: parent owns the value, this only reports clicks
export default function Qty({ value, onMinus, onPlus, label = "" }) {
  return (
    <div className="qty">
      <button onClick={onMinus} aria-label={`Decrease quantity ${label}`}>−</button>
      <span aria-live="polite">{value}</span>
      <button onClick={onPlus} aria-label={`Increase quantity ${label}`}>+</button>
    </div>
  );
}
