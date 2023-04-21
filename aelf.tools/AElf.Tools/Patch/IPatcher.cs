namespace AElf.Tools.Patch;

public interface IPatcher
{
    bool SystemContactIgnored { get; }
}

public interface IPatcher<T> : IPatcher
{
    void Patch(T item);
}



