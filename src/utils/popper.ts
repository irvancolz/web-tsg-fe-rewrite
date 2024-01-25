import {
  computePosition,
  flip,
  shift,
  offset,
  autoPlacement,
  ReferenceType,
  Placement,
} from "@floating-ui/react";

export type Tooltips = {
  trigger: ReferenceType;
  overlay: HTMLElement;
  position?: Placement;
};

export function createTooltips({
  trigger,
  overlay,
  position = "bottom",
}: Tooltips) {
  computePosition(trigger, overlay, {
    placement: position,
    middleware: [offset(6), flip(), shift({ padding: 5 }), autoPlacement()],
  }).then(({ x, y }) => {
    Object.assign(overlay.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  });
}
