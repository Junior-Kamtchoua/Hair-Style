type Service = {
  id: string;
  name: string;
  price: number;
};

export default function ServiceCard({
  service,
  onSelect,
}: {
  service: Service;
  onSelect: (s: Service) => void;
}) {
  return (
    <div className="serviceCard" onClick={() => onSelect(service)}>
      <h3>{service.name}</h3>
      <p>${service.price}</p>
    </div>
  );
}
