import { Link } from "@tanstack/react-router";
import { Clock3, GripVertical, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Status } from "./ui";

export type PipelineOpportunity = {
  name: string;
  project: string;
  value: string;
  description: string;
  ownerInitials: string;
  daysInStage: number;
};

export type PipelineStage = {
  name: string;
  value: string;
  opportunities: PipelineOpportunity[];
};

function OpportunityCard({ opportunity }: { opportunity: PipelineOpportunity }) {
  return (
    <Link
      to="/oportunidade"
      className="opportunity-card"
      draggable
      aria-label={`Abrir oportunidade de ${opportunity.name}`}
    >
      <div className="opportunity-card__top">
        <Status>{opportunity.project}</Status>
        <GripVertical aria-hidden="true" />
      </div>
      <div className="opportunity-card__copy">
        <h3>{opportunity.name}</h3>
        <p>{opportunity.description}</p>
      </div>
      <strong className="opportunity-card__value">{opportunity.value}</strong>
      <div className="opportunity-card__footer">
        <span className="opportunity-card__avatar" aria-label={`Responsável ${opportunity.ownerInitials}`}>
          {opportunity.ownerInitials}
        </span>
        <span className="opportunity-card__deadline">
          <Clock3 aria-hidden="true" />
          {opportunity.daysInStage} dias
        </span>
      </div>
    </Link>
  );
}

function KanbanColumn({ stage }: { stage: PipelineStage }) {
  return (
    <section className="pipeline-column" aria-label={`Etapa ${stage.name}`}>
      <header className="pipeline-column__header">
        <span>
          <i aria-hidden="true" />
          <b>{stage.name}</b>
          <em>{stage.opportunities.length}</em>
        </span>
        <strong>{stage.value}</strong>
      </header>
      <div className="pipeline-column__cards">
        {stage.opportunities.map((opportunity) => (
          <OpportunityCard
            key={`${stage.name}-${opportunity.name}`}
            opportunity={opportunity}
          />
        ))}
      </div>
      <Button variant="ghost" className="pipeline-column__add">
        <Plus /> Adicionar
      </Button>
    </section>
  );
}

export function KanbanBoard({ stages }: { stages: PipelineStage[] }) {
  return (
    <div className="pipeline-scroll" tabIndex={0} aria-label="Quadro do pipeline comercial">
      <div className="pipeline-board">
        {stages.map((stage) => (
          <KanbanColumn key={stage.name} stage={stage} />
        ))}
      </div>
    </div>
  );
}