import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

export const dateFormatter = (date: Date, baseDate: Date = new Date()) => {
  return formatDistance(date, baseDate, {
    addSuffix: true,
    locale: ptBR,
  });
};
