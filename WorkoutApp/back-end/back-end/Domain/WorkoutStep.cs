namespace back_end.Domain
{
    public class WorkoutStep
    {
        public string instruction { get; set; }
        public int time { get; set; }

        public WorkoutStep(string instruction, int time)
        {
            this.instruction = instruction;
            this.time = time;
        }
    }
}
